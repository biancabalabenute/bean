package bean.backend.repository;

import bean.backend.entities.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    List<Cliente> findByName(String name);

    Optional<Cliente> findByCpfOuCnpj(String cpfOuCnpj);
}
