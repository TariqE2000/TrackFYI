package com.example.TrackFYI.controller;

import com.example.TrackFYI.model.ApplicationModel;
import com.example.TrackFYI.model.Status;
import org.springframework.web.bind.annotation.*;
import com.example.TrackFYI.service.ApplicationService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @GetMapping
    public List<ApplicationModel> getApplications() {
        return applicationService.getApplications();
    }

    @GetMapping("/{id}")
    public Optional<ApplicationModel> getApplication(@PathVariable UUID id) {
        return applicationService.getApplicationById(id);
    }
    @PostMapping()
    public ApplicationModel addApplication(@RequestBody ApplicationModel application) {
        return applicationService.addApplication(application);
    }

    @PutMapping()
    public ApplicationModel updateApplication(@RequestBody ApplicationModel application) {
        Optional<ApplicationModel> oldApplication =
                applicationService.getApplicationById(application.getId());

        if (oldApplication.isEmpty()) {
            throw new RuntimeException("Application not found");
        }

        return applicationService.updateApplication(application);
    }
    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable UUID id){
        Optional<ApplicationModel> application = applicationService.getApplicationById(id);

        if(application.isEmpty()){
            throw new RuntimeException("Application not found");
        }
        applicationService.deleteApplication(id);
    }
    @GetMapping("/company/{company}")
    public List<ApplicationModel> getApplicationsByCompanyName(@PathVariable String company){
        return applicationService.getApplicationByCompany(company);
    }
    @GetMapping("/email/{email}")
    public List<ApplicationModel> getApplicationsByRecruiterEmail(@PathVariable String email){
        return applicationService.getApplicationByRecruiterEmail(email);
    }
    @GetMapping("/status/{status}")
    public List<ApplicationModel> getApplicationsByStatusName(@PathVariable Status status){
        return applicationService.getApplicationByStatus(status);
    }
}
