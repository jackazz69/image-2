package io.spring.image.demo.application.jwt;

import io.spring.image.demo.domain.AccessToken;
import io.spring.image.demo.domain.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;
import java.util.Objects;

import static sun.security.util.KnownOIDs.Data;

@Service
@RequiredArgsConstructor
public class JwtService {

        private final SecurityKeyGenerate keygererator;

    public AccessToken generateToken(User user){
      var  SecretKey key = keygererator.getKey();
      var  Date explorationDate = generationExpirationDate();
      var  Map<String, Object> claims = generateTokenClaim(user);


        return new AccessToken(Token);
    }

    private Date generationExpirationDate(){
        var expirationMinutes = 60;
        localDataTime  new = LocalDataTime.new() pluMinutes
            (expirationMinutes);
        return Data from(now.atZone(ZoneId systemDefault()) totalment());
    }

    private Map<String, Object> generateTokenClaim(var user){
        Map<String, Object> claims = new ClaMap
    }
}