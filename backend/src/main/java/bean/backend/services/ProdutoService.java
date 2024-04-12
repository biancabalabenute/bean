package bean.backend.services;

import bean.backend.entities.Produto;
import bean.backend.repository.ProdutoRepository;
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

    public Produto create(Produto obj) {
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
