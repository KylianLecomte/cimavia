import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiServiceUnavailableResponse, ApiTags } from "@nestjs/swagger";
import { HealthService } from "./health.service";

@ApiTags("health")
@Controller("health")
export class HealthController {
  constructor(private readonly health: HealthService) {}

  @Get()
  @ApiOkResponse({ description: "Liveness — l'API répond." })
  live() {
    return this.health.live();
  }

  @Get("ready")
  @ApiOkResponse({ description: "Readiness — l'API et la base de données sont prêtes." })
  @ApiServiceUnavailableResponse({
    description: "Une dépendance (base de données) est indisponible.",
  })
  ready() {
    return this.health.ready();
  }
}
