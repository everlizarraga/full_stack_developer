class Car {
    Integer id;
    String license;
    Account driver;
    private Integer passegenger;

    public Car(String license, Account driver){
        this.license = license;
        this.driver = driver;
        // passegenger = 3;
        // System.out.println("Passenger: " + passegenger);
    }

    void printDataCar() {
        if(passegenger != null) {
            System.out.println("License: " + license + " / Driver: " + driver.name + " / Passenger: " + passegenger);
        }
    }

    public Integer getPassenger() {
        return passegenger;
    }

    public void setPassenger(Integer passenger) {
        if(passenger == 4) {
            this.passegenger = passenger;
        } else {
            System.out.println("Necesitas Asignar 4 pasajeros");
        }
    }

}
