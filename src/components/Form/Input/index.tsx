import React, { useState } from 'react'

import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import {
  Container,
  Label,
  Error,
  InputContainer,
  FormInput,
  ToggleShowPassButton,
  Icon,
} from './styles'

interface Props extends TextInputProps {
  control: Control
  name: string
  title: string
}

export function Input({
  name,
  control,
  title,
  secureTextEntry,
  ...rest
}: Props) {
  const [passwordHidden, setPasswordHidden] = useState(true)

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Label>{title}</Label>
            {error && <Error>{error.message}</Error>}
            <InputContainer>
              <FormInput
                {...rest}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry && passwordHidden}
              />
              {secureTextEntry && (
                <ToggleShowPassButton
                  onPress={() => setPasswordHidden(!passwordHidden)}
                >
                  <Icon name={passwordHidden ? 'eye-off' : 'eye'} />
                </ToggleShowPassButton>
              )}
            </InputContainer>
          </>
        )}
      />
    </Container>
  )
}
