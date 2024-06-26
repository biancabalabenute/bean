package bean.backend.services;

import bean.backend.entities.Categoria;
import bean.backend.repository.CategoriaRepository;
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
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    public List<Categoria> findAll() {
        return repository.findAll();
    }

    public Categoria findById(Long id){
        Optional<Categoria> obj = repository.findById(id);
        return obj.get();
    }

    public Categoria insert(Categoria obj) {
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

    public Categoria update(Long id, Categoria obj) {
        Optional<Categoria> optionalEntity = repository.findById(id);
        if (optionalEntity.isPresent()) {
            Categoria entity = optionalEntity.get();
            updateData(entity, obj);
            return repository.save(entity);
        } else {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Categoria entity, Categoria obj) {
        entity.setName(obj.getName());
    }
}