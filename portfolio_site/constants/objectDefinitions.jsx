import PropTypes from 'prop-types';

export const jobObject=(info) => {return({
        title: info.title,
        company: info.company,
        dates: info.dates,
        oneLiner: info.oneLiner,
        details: details
})


    jobObject.propTypes={
            info: PropTypes.exact({
            title: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            dates: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired
        }).isRequired

        }



    // name: yup.string().required(),
    // age: yup.number().required().positive().integer(),
    // email: yup.string().email(),
    // website: yup.string().url(),
    // createdOn: yup.date().default(function () {

}
