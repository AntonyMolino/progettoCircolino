package it.ms.api.data.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.ms.api.data.entity.Piatti;

public interface PiattiRepository extends JpaRepository<Piatti,Integer>{
    
    List<Piatti> findByCategoria(String categoria);
    List<Piatti> findById(int id);

}
