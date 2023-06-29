// public class ContactRepository {
    
// }
package com.example.springapp.repository;
import com.example.springapp.model.Contact;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Additional methods if needed
}