package bean.backend.services;

import bean.backend.entities.Produto;
import bean.backend.repository.ProdutoRepository;
import bean.backend.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    public List<Produto> findAll() {
        return repository.findAll();
    }

    public Produto findById(Long id) {
        Optional<Produto> obj = repository.findById(id);
        return obj.get();
    }

    public List<Produto> findByMarca(Long marcaId) {
        return repository.findByMarcasId(marcaId);
    }

    public Produto findByCodigoDeBarras(String codigoDeBarras) {
        Optional<Produto> produto = repository.findByCodigoDeBarras(codigoDeBarras);
        return produto.orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado para o código de barras: " + codigoDeBarras));
    }

    public Produto insert(Produto obj) {
        obj = repository.save(obj);
        return obj;
    }

    public Produto update(Produto obj) {
        obj = repository.save(obj);
        return obj;
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}