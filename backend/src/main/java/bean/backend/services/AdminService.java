package bean.backend.services;

import bean.backend.entities.Admin;
import bean.backend.repository.AdminRepository;
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
public class AdminService {

    @Autowired
    private AdminRepository repository;

    public List<Admin> findAll() {
        return repository.findAll();
    }

    public Admin findById(Long id) {
        Optional<Admin> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Admin insert(Admin obj) {
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

    public Admin update(Long id, Admin obj) {
        try {
            Admin entity = repository.getReferenceById(id);
            updateData(entity, obj);
            return repository.save(entity);
        } catch (EntityNotFoundException e){
            throw new ResourceNotFoundException(id);
        }
    }

    private void updateData(Admin entity, Admin obj) {
        entity.setName(obj.getName());
        entity.setEmail(obj.getEmail());
    }
}
