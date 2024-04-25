package bean.backend.services;

import bean.backend.entities.Estoque;
import bean.backend.repository.EstoqueRepository;
import bean.backend.services.exceptions.DatabaseException;
import bean.backend.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstoqueService {

    @Autowired
    private EstoqueRepository repository;

    public List<Estoque> findAll() {
        return repository.findAll();
    }

    public Estoque findById(Long id) {
        Optional<Estoque> obj = repository.findById(id);
        return obj.get();
    }

    public Estoque insert(Estoque obj) {
        return repository.save(obj);
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException(e.getMessage());
        }
    }

    public Estoque update(Long id, Estoque obj) {
        try {
            Estoque entity = repository.getOne(id);
            updateData(entity, obj);
            return repository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Estoque entity, Estoque obj) {

        entity.setQuantidade(obj.getQuantidade());
    }
}