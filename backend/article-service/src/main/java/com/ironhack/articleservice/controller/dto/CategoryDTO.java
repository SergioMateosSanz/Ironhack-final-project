package com.ironhack.articleservice.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CategoryDTO {

    private String type;
    private String description;
    private LocalDate creationDate;
    private String userCreation;
    private LocalDate modificationDate;
    private String userModification;
}
