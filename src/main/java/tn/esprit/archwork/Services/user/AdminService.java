package tn.esprit.archwork.Services.user;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.archwork.Respositories.AdminRepository;
import tn.esprit.archwork.Respositories.UserInfoRepository;
import tn.esprit.archwork.entities.Admin;
import tn.esprit.archwork.entities.User;

import java.util.Map;

@Service
@Slf4j
@AllArgsConstructor
@NoArgsConstructor
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    UserInfoRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;
    public Admin getAdminByEmail(String email){
        return this.adminRepository.findAdminByUserEmail(email);
    }


    public String addAdmin(Map<String, String> data) {
        User user = new User();
        user.setEmail(data.get("email"));
        user.setPassword(data.get("password"));
        user.setRole(data.get("role"));
        Admin admin = new Admin();
        admin.setUser(user);
        //etudiant.setCin(Long.parseLong(data.get("cin")));
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
        adminRepository.save(admin);
        return "admin Added Successfully";
    }
}
