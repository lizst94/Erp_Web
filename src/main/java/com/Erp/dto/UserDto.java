package com.Erp.dto;

import com.Erp.constant.MemberRole;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;

@Getter
@Setter
@ToString
public class UserDto {  //세션영역에 바인딩할 로그인한 사람의 정보

    private String id;

    private String name;

    private String birth; //생년월일

    private String email; //이메일

    private String phone; //핸드폰 번호

    private LocalDate date; //입사년월

    private String department; //부서

    @Enumerated(EnumType.STRING)
    private MemberRole role;//사용자&관리자

    private String imageUrl ;

    public UserDto(String id, String name, String birth, String email, String phone, LocalDate date, String department, MemberRole role, String imageUrl) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.department = department;
        this.role = role;

        if (imageUrl != null){
            this.imageUrl = imageUrl;
        }
    }
}
