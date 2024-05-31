import pyautogui
import time
import random

while True:
    # Get the screen's width and height to choose random positions
    screen_width, screen_height = pyautogui.size()
    
    # Generate random x and y coordinates within the screen dimensions
    x = random.randint(0, screen_width)
    y = random.randint(0, screen_height)
    
    # Move the mouse to the random position
    pyautogui.moveTo(x, y, duration=1)  # You can adjust the duration as needed
    
    # Wait for 2 seconds before the next mouse movement
    time.sleep(2)
