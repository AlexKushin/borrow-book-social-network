package com.okushyn.book.book;

import com.okushyn.book.common.BaseEntity;
import com.okushyn.book.feedback.Feedback;
import com.okushyn.book.history.BookTransactionHistory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.util.List;


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

    private boolean shareable;


    @OneToMany(mappedBy = "book")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "book")
    private List<BookTransactionHistory> histories;

    @Transient
    public double getRate() {
        if (feedbacks == null || feedbacks.isEmpty()) {
            return 0.0;
        }
        var rate = this.feedbacks.stream()
                .mapToDouble(Feedback::getNote)
                .average()
                .orElse(0.0);
        return Math.round(rate * 10.0) / 10.0;
    }

}
