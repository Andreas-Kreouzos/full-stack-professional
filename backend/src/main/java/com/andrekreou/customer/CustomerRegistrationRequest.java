package com.andrekreou.customer;

public record CustomerRegistrationRequest(
        String name,
        String email,
        Integer age
) {
}
