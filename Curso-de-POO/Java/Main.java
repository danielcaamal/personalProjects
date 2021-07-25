class Main{
    public static void main(String[] args) {
        System.out.println("Hola mundo");
        Car car = new Car("XTW345", new Account("Daniel Caamal", "DK890"));
        System.out.println(car.driver.name);
        car.printDataCar();

        UberX uberX = new UberX("JAV002", new Account("Gabriel Gutierrez", "GG001"),"Chevrolet", "Aveo");
        uberX.printDataCar();
    }
}