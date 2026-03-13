package service;

import model.ApplicationModel;
import model.Status;
import org.springframework.stereotype.Service;
import repository.ApplicationRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ApplicationService {
    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public Optional<ApplicationModel> getApplicationById(UUID id) {
        return applicationRepository.findById(id);
    }

    public List<ApplicationModel> getApplicationByStatus(Status status) {
        return applicationRepository.findByStatus(status);
    }

    public List<ApplicationModel> getApplicationByRecruiterEmail(String email) {
        return applicationRepository.findByRecruiterEmail(email);
    }

    public List<ApplicationModel> getApplicationByCompany(String companyName) {
        return applicationRepository.findByCompany(companyName);
    }

    public List<ApplicationModel> getApplications() {
        return applicationRepository.findAll();
    }

    // TODO: Updating application needs to be added
    // TODO: Deleting application needs to be added With adding Applications as well

}
