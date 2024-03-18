package com.andrekreou;

import com.andrekreou.customer.Customer;
import com.andrekreou.customer.CustomerRepository;
import com.andrekreou.customer.Gender;
import com.github.javafaker.Faker;
import com.github.javafaker.Name;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        System.out.println("Welcome to Full Stack Professional course!");
    }

    @Bean
    CommandLineRunner runner(CustomerRepository customerRepository,
                             PasswordEncoder passwordEncoder) {
        return args -> {
            var faker = new Faker();
            Random random = new Random();
            Name name = faker.name();
            String firstName = name.firstName();
            String lastName = name.lastName();
            int age = random.nextInt(16, 99);
            Gender gender = age % 2 == 0 ? Gender.MALE : Gender.FEMALE;
            Customer customer = new Customer(
                    firstName + " " + lastName,
                    firstName.toLowerCase() + "." + lastName.toLowerCase() + "@amigoscode.com",
                    passwordEncoder.encode(UUID.randomUUID().toString()),
                    age,
                    gender);
            customerRepository.save(customer);
        };
    }
}