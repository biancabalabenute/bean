package bean.backend.repository;

import bean.backend.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByMarcasId(Long marcaId);

    List<Produto> findByMarcasName(String nameMarca);

    Optional<Produto> findByCodigoDeBarras(String codigoDeBarras);
}
