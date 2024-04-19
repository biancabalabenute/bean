package bean.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.io.Serial;
import java.io.Serializable;
import java.time.Instant;

@Entity
@Table(name = "tb_admin")
@Data
public class Admin implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String senha;
    @Column(name = "last_login")
    private Instant lastLogin;

    public Admin() {
    }

    public Admin(Long id, String name, String email, String senha) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.senha = senha;

    }

    public boolean verificarCredenciais(String email, String senha) {
        if (!this.email.equals(email)) {
            return false;
        }

        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(senha.getBytes());
            String senhaHasheada = bytesToHex(hashBytes);

            return senhaHasheada.equals(this.senha);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Falha ao hashear a senha", e);
        }
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }


}