// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLicenseConfig} from 'mattermost-redux/actions/general';
import {uploadLicense, removeLicense} from 'mattermost-redux/actions/admin';

import {requestTrialLicense} from 'actions/admin_actions';

import LicenseSettings from './license_settings.jsx';

function mapStateToProps(state) {
    return {
        stats: state.entities.admin.analytics,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getLicenseConfig,
            uploadLicense,
            removeLicense,
            requestTrialLicense,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseSettings);
