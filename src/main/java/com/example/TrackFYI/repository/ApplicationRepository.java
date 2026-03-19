package com.example.TrackFYI.repository;

import com.example.TrackFYI.model.ApplicationModel;
import com.example.TrackFYI.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ApplicationRepository extends JpaRepository<ApplicationModel, UUID> {

    List<ApplicationModel> findByStatus(Status status);

    List<ApplicationModel> findByCompany(String company);

    List<ApplicationModel> findByRecruiterEmail(String email);

}
