export const NETWORK_CHANGE = 'network/change';

export function setConnectivity(network) {
  const status = network;
  return {
    type: NETWORK_CHANGE,
    payload: {
      isOnline: status === true,
      isOffline: status === false,
    },
  };
}
