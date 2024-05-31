import time

# print(int(time.strftime('%H')))
a = int(time.strftime('%H'))
# print(a >= 6)
if(a >= 6 and a < 12):
    print("Good Morning")

elif(a >= 12 and a < 15):
    print("Good afternoon")
    
else:
    print("idk")
    