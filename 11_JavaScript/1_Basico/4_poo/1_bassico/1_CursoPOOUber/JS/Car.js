class Car {

    constructor(license,driver) {
        this.id;
        this.license = license;
        this.driver = driver;
        this.passegenger;
    }

    printDataCar() {
        console.log(`License: ${this.license}`);
        console.log(`Name: ${this.driver.name}`);
        console.log(`Document: ${this.driver.document}`);
    }
}
