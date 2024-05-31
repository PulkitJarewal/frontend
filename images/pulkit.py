from pynput import mouse
import time
import threading

# Global variable to control recording
recording = True
recorded_actions = []

def on_click(x, y, button, pressed):
    if pressed:
        recorded_actions.append(("click", x, y))

def on_move(x, y):
    recorded_actions.append(("move", x, y))

def record_mouse_actions():
    print("Recording mouse actions. Press Ctrl+C to stop recording.")
    with mouse.Listener(on_click=on_click, on_move=on_move) as listener:
        try:
            while recording:
                pass
        except KeyboardInterrupt:
            listener.stop()
            print("Recording stopped.")

def playback_mouse_actions(actions, repeat=1):
    print(f"Playing back mouse actions {repeat} times.")
    
    for _ in range(repeat):
        for action in actions:
            if action[0] == "move":
                mouse.Controller().position = (action[1], action[2])
            elif action[0] == "click":
                mouse.Controller().click(button=mouse.Button.left)
    
    print("Playback completed.")
    

if __name__ == "__main__":
    # Create a separate thread for recording
    record_thread = threading.Thread(target=record_mouse_actions)
    record_thread.start()
    
    input("Press Enter to stop recording...")
    recording = False  # Set the flag to stop recording
    record_thread.join()  # Wait for the recording thread to finish
    
    repeat_times = int(input("Enter the number of times to repeat playback: "))
    playback_mouse_actions(recorded_actions, repeat=repeat_times)
