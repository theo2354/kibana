/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { IResolvers, makeExecutableSchema } from 'graphql-tools';

import { schemas } from './graphql';
import { createAuthenticationsResolvers } from './graphql/authentications';
import { createScalarToStringArrayValueResolvers } from './graphql/ecs';
import { createEsValueResolvers, createEventsResolvers } from './graphql/events';
import { createHostsResolvers } from './graphql/hosts';
import { createKpiHostsResolvers } from './graphql/kpi_hosts';
import { createKpiNetworkResolvers } from './graphql/kpi_network';
import { createNetworkResolvers } from './graphql/network';
import { createNoteResolvers } from './graphql/note';
import { createPinnedEventResolvers } from './graphql/pinned_event';
import { createScalarDateResolvers } from './graphql/scalar_date';
import { createScalarToAnyValueResolvers } from './graphql/scalar_to_any';
import { createScalarToBooleanArrayValueResolvers } from './graphql/scalar_to_boolean_array';
import { createScalarToDateArrayValueResolvers } from './graphql/scalar_to_date_array';
import { createScalarToNumberArrayValueResolvers } from './graphql/scalar_to_number_array';
import { createSourceStatusResolvers } from './graphql/source_status';
import { createSourcesResolvers } from './graphql/sources';
import { createTimelineResolvers } from './graphql/timeline';
import { createWhoAmIResolvers } from './graphql/who_am_i';
import { AppBackendLibs } from './lib/types';
import { createMatrixHistogramResolvers } from './graphql/matrix_histogram';

export const initServer = (libs: AppBackendLibs) => {
  const schema = makeExecutableSchema({
    resolvers: [
      createAuthenticationsResolvers(libs) as IResolvers,
      createEsValueResolvers() as IResolvers,
      createEventsResolvers(libs) as IResolvers,
      createHostsResolvers(libs) as IResolvers,
      createKpiNetworkResolvers(libs) as IResolvers,
      createMatrixHistogramResolvers(libs) as IResolvers,
      createNoteResolvers(libs) as IResolvers,
      createPinnedEventResolvers(libs) as IResolvers,
      createSourcesResolvers(libs) as IResolvers,
      createScalarToStringArrayValueResolvers() as IResolvers,
      createNetworkResolvers(libs) as IResolvers,
      createScalarDateResolvers() as IResolvers,
      createScalarToDateArrayValueResolvers() as IResolvers,
      createScalarToAnyValueResolvers() as IResolvers,
      createScalarToBooleanArrayValueResolvers() as IResolvers,
      createScalarToNumberArrayValueResolvers() as IResolvers,
      createSourcesResolvers(libs) as IResolvers,
      createSourceStatusResolvers(libs) as IResolvers,
      createTimelineResolvers(libs) as IResolvers,
      createWhoAmIResolvers() as IResolvers,
      createKpiHostsResolvers(libs) as IResolvers,
    ],
    typeDefs: schemas,
  });

  libs.framework.registerGraphQLEndpoint('/api/solutions/security/graphql', schema);
};
