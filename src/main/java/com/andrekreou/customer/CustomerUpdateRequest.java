package com.andrekreou.customer;

public record CustomerUpdateRequest(
        String name,
        String email,
        Integer age
) {
}
