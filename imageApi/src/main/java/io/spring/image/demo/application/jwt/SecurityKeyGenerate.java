package io.spring.image.demo.application.jwt;

import io.jsonwebtoken.Jwts;

import javax.crypto.SecretKey;

public class SecurityKeyGenerate {

    private SecretKey key;

    public SecretKey getKey(){
        if(key == null){
            key = Jwts.SIG.HS256.key().build();
        }
        return key;
    }
}
