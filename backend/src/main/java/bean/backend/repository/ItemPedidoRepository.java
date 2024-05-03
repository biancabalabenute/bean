package bean.backend.repository;

import bean.backend.entities.ItemPedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemPedidoRepository extends JpaRepository<ItemPedido, Long> {
    ItemPedido findByIdVendaPlataforma(String idVendaPlataforma);

    void deleteByIdVendaPlataforma(String idVendaPlataforma);
}
