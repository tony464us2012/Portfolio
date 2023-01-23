import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen, onClose } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
      .min(1, "Too Short")
      .max(50, "Too Long")
      .required("Firstname is required"),
      email: Yup.string().email().required("Email is required"),
      type: Yup.string().required(),
      comment: Yup.string()
      .required("Password is required")
      .min(6, "Message is too short."),
    }),
    onSubmit: (values) => {
      submit(values)
    },
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
      if (response.type === 'success') {
        formik.resetForm()
      }
      setTimeout(() => {
        onClose()
      }, 5000)
    }
    //eslint-disable-next-line
  }, [response])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} >
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} isRequired>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                   onBlur={formik.handleBlur}
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName ? 
                <FormErrorMessage>Name is required</FormErrorMessage>
                : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email} isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                   onBlur={formik.handleBlur}
                  {...formik.getFieldProps('email')}
                />
                 {formik.touched.email && formik.errors.email ? 
                <FormErrorMessage>Email is required</FormErrorMessage>
                : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type} isRequired>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" 
                value={formik.values.email} 
                onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? 
                <FormErrorMessage>Type is required</FormErrorMessage>
                : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment} isRequired>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                   onBlur={formik.handleBlur}
                  {...formik.getFieldProps('comment')}
                />
                 {formik.touched.comment && formik.errors.comment ? 
                <FormErrorMessage>Comment is required</FormErrorMessage>
                : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
