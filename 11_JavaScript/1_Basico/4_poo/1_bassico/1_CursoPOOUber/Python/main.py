from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo - Python!!")

    car = Car("AMS4433", Account("Alguien PYthon", "AMS4433"))
    print(vars(car))
    print(vars(car.driver))

    