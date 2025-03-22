import argon2 from 'argon2';

export async function hashPassword(plainPassword: string) {
    return await argon2.hash(plainPassword);
}

export async function validatePassword(plainPassword: string, hashedPassword: string) {
    return await argon2.verify(hashedPassword, plainPassword);
}