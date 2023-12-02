package tn.esprit.archwork.Respositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.archwork.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    Admin findAdminByUserEmail(String email);

}
