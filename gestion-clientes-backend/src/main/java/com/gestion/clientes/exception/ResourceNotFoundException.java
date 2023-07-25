
package com.gestion.clientes.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author Samuel
 */
@ResponseStatus(value= HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    public static final long serialVersionUID=1L;

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
