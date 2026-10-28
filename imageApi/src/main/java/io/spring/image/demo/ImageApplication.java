package io.spring.image.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing //não esquecer de colocar para que ele coloque em nosso banco de Dados
public class ImageApplication {



	public static void main(String[] args) {
		SpringApplication.run(ImageApplication.class, args);
	}

}
