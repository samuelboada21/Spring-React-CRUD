
package com.gestion.clientes.repository;

import com.gestion.clientes.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Samuel
 */
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
    
}
