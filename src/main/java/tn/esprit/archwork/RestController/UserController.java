package tn.esprit.archwork.RestController;


import lombok.extern.slf4j.Slf4j;

import tn.esprit.archwork.Services.IEtudiantService;
import tn.esprit.archwork.Services.user.JwtService;
import tn.esprit.archwork.Services.user.UserService;
import tn.esprit.archwork.entities.Etudiant;
import tn.esprit.archwork.entities.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import org.json.JSONException;
import org.json.JSONObject;


import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
@Slf4j
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private IEtudiantService etudiantService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;



    @PostMapping("/validateEtudiantToken")
    public ResponseEntity<Boolean> validateEtudiantToken(@RequestBody Map<String,String> token) throws JSONException {

        String[] chunks = token.get("token").split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();

        String payload = new String(decoder.decode(chunks[1]));
        JSONObject payloadJson = new JSONObject(payload);

        String email = payloadJson.getString("email");
        Etudiant etudiant = etudiantService.getEtudiantByEmail(email);

        return ResponseEntity.ok().body(etudiant != null && etudiant.getUser().getRole().equals("ROLE_ETUDIANT"));
    }

    @PostMapping("/addEtudiant")
    public String addNewUser(@RequestBody Map<String, String> data) {
        return service.addEtudiant(data);
    }




    @PostMapping("/generateToken")
    public ResponseEntity<Map<String, Object>> authenticateAndGetToken(@RequestBody User authRequest) {
        //ModelMapper modelMapper = new ModelMapper();

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            User user = service.getUserByEmail(authRequest.getEmail());
            Etudiant etudiant=etudiantService.getEtudiantByEmail(user.getEmail());
            Map<String, Object> response = new HashMap<>();
            user.setPassword("");
            response.put("user", etudiant);
            response.put("token", jwtService.generateToken(user.getEmail(),user.getRole()));
            return ResponseEntity.ok().body(response);
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

    @PostMapping("/user/validateToken")
    public ResponseEntity<Boolean> validateAdminToken(
            @RequestBody Map<String, Object> requestData
    ) {
        String token = (String) requestData.get("token");
        log.info(requestData.get("user").toString());
        log.info(token);
        //log.info(user.getUsername());
        return ResponseEntity.ok().body(true);
    }

}
