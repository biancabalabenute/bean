package bean.backend.services;

import bean.backend.entities.Marca;
import bean.backend.repository.MarcaRepository;
import bean.backend.services.exeptions.DatabaseException;
import bean.backend.services.exeptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarcaService {

    @Autowired
    private MarcaRepository repository;

    public List<Marca> findAll() {
        return repository.findAll();
    }

    public Marca findById(Long id) {
        Optional<Marca> obj = repository.findById(id);
        return obj.get();
    }

    public Marca insert(Marca obj) {
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

    public Marca update(Long id, Marca obj) {
        try {
            Marca entity = repository.getOne(id);
            updateData(entity, obj);
            return repository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Marca entity, Marca obj) {
        entity.setName(obj.getName());
    }
}