package org.example.project;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
@Entity
@Data



@NoArgsConstructor
@AllArgsConstructor
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDate subcriptonstartdate;
    private LocalDate subcriptonenddate;
    private PlanType planType;


    private boolean isvalid;
    @OneToOne
    private User user;

}
