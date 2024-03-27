"use server";

import getAuthProviders from "@/actions/getAuthProviders";

import Grid from "@mui/material/Unstable_Grid2";

import SignInBtn from "@/components/signInBtn";

/**
 *
 * @returns list of auth providers as grid components with a custom sign in
 * button component
 */
export default async function AuthProvidersSignInBtns() {
  const providers = await getAuthProviders();

  const providersComponents = Object.values(providers).map((provider) => (
    <Grid
      xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      key={provider.name}
    >
      <SignInBtn provider={provider} />
    </Grid>
  ));

  return providersComponents;
}
