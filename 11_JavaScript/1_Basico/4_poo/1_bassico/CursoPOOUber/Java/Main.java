// package Java;
class Main {
    public static void main(String[] args) {
        Car car = new Car("AMQ123", new Account("Andres Herrera", "AND1233444"));
        // car.passegenger = 4;
        car.setPassenger(3);;
        car.printDataCar();
        
        UberX uberX = new UberX("AMQ177", new Account("Jonathan Nuñez", "DNI12321321"),"Chevrolet","Camaro");
        uberX.setPassenger(4);;
        uberX.printDataCar();
    }
}