from fastapi import APIRouter, Depends, Response
from typing import Union, List
from queries.immunization import (
    Error,
    ImmunizationIn,
    ImmunizationRepository,
    ImmunizationOut,
)

router = APIRouter()


@router.post("/immunization", response_model=Union[ImmunizationOut, Error])
def create_immunization(
    immunization: ImmunizationIn,
    response: Response,
    repo: ImmunizationRepository = Depends(),
):
    response.status_code = 400  # bad request
    return repo.create(immunization)


@router.get(
    "/immunization", response_model=Union[List[ImmunizationOut], Error]
)
def get_all(
    repo: ImmunizationRepository = Depends(),
):
    return repo.get_all()


@router.put(
    "/immunization/{immunization_id}",
    response_model=Union[ImmunizationOut, Error],
)
def update_immunization(
    immunization_id: int,
    immunization: ImmunizationIn,
    repo: ImmunizationRepository = Depends(),
) -> Union[Error, ImmunizationOut]:
    return repo.update(immunization_id, immunization)