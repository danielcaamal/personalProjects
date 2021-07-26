class Main{
    public static void main(String[] args) {
        System.out.println("Hola mundo");
        Car car = new Car("JAV001", new Account("Daniel Caamal", "DK890", "danielcaamal@email.com", "12345"));
        car.printDataCar();

        UberX uberX = new UberX("JAV002", new Account("Gabriel Gutierrez", "GG001", "gabrielgutierrez@email.com", "12345"),"Chevrolet", "Aveo");
        uberX.printDataCar();

        uberX.setPassenger(3);
    }
}