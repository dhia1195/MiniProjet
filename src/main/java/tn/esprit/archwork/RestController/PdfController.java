package tn.esprit.archwork.RestController;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.archwork.Services.IUniversiteService;
import tn.esprit.archwork.entities.Universite;

import java.io.ByteArrayOutputStream;
import java.util.List;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@RestController
@RequestMapping("/api/pdf")
public class PdfController {

    // Injectez votre service ou repository pour obtenir la liste des universités
    private final IUniversiteService universiteService;

    public PdfController(IUniversiteService universiteService) {
        this.universiteService = universiteService;
    }

    @GetMapping("/generate")
    public ResponseEntity<byte[]> generatePdf() {
        List<Universite> universities = universiteService.retrieveAllUniversites();

        if (universities == null || universities.isEmpty()) {
            // Gérez le cas où la liste d'universités est vide ou nulle
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        byte[] pdfContent = generatePdfFromUniversities(universities);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("inline", "universities.pdf");

        return new ResponseEntity<>(pdfContent, headers, HttpStatus.OK);
    }

    private byte[] generatePdfFromUniversities(List<Universite> universities) {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        try {
            Document document = new Document();
            PdfWriter.getInstance(document, outputStream);
            document.open();

            for (Universite university : universities) {
                document.add(new Paragraph("ID: " + university.getIdUniv()));
                document.add(new Paragraph("Nom: " + university.getNomUniv()));
                document.add(new Paragraph("Adresse: " + university.getAdresse()));
                document.add(new Paragraph("\n")); // Ajoutez une ligne vide entre chaque université
            }

            document.close();
        } catch (DocumentException e) {
            // Gérez les exceptions appropriées
            e.printStackTrace();
        }

        return outputStream.toByteArray();
    }
}