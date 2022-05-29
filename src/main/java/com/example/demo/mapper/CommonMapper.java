package com.example.demo.mapper;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class CommonMapper {

    private final ModelMapper modelMapper;

    <T, S> S convertToEntity(T data, Class<S> type) {
        return modelMapper.map(data, type);
    }

    <T, S> S convertToResponse(T data, Class<S> type) {
        return modelMapper.map(data, type);
    }

    <T, S> List<S> convertToResponseList(List<T> lists, Class<S> type) {
        return lists.stream()
                .map(list -> convertToResponse(list, type))
                .collect(Collectors.toList());
    }

}
