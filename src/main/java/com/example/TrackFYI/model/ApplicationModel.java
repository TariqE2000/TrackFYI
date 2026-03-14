package com.example.TrackFYI.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    // TODO: Might need to change company and role to enums instead of string
    private String company;
    private String role;

    @Enumerated(EnumType.STRING)
    private Status status;

    private LocalDate dateApplied;
    private String recruiterName;

    @Email
    private String recruiterEmail;

    @PrePersist
    public void setDefaultValues() {
        if (dateApplied == null) {
            dateApplied = LocalDate.now();
        }

        if (company == null) {
            company = "None";
        }
        if (role == null) {
            role = "None";
        }
        if (status == null) {
            status = Status.NONE;
        }
        if (recruiterName == null) {
            recruiterName = "None";
        }
        if (recruiterEmail == null) {
            recruiterEmail = "recruiter@comany.com";
        }
    }

}
