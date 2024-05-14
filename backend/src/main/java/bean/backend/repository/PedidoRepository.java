package bean.backend.repository;

import bean.backend.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByInstantBetween(Instant dataInicial, Instant dataFinal);
    List<Pedido> findAll();
}
