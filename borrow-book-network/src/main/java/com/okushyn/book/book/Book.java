package com.okushyn.book.book;

import com.okushyn.book.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;


@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Book extends BaseEntity {

    private String title;

    private String authorName;

    private String isbn; //book identifier

    private String synopsis; //small resume/description

    private String bookCover;

    private boolean archived;

    private boolean sharable;

}
